#!/usr/bin/python
# -*- coding: UTF-8 -*-
import socket
import time
import connect

def judge(array,x):
    array.sort()
    count=0
    while count<len(array)-1:
        if array[count] is x:
            return True
        else:
            return False

def server():
# 1 创建socket套接字
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# 格式socket.socket（地址簇，socket类型）
# 返回一个通信套接字s，为本机向网络通信的接口。

# 2 绑定地址和端口
    port = 1026
    host = '192.168.137.246'
# 绑定本地地址，只有主机上的进程可以连接到服务器，如果host传空字符串，服务器将接受本机所有可用的 IPv4 地址。
    s.bind((host, port))


# 3 等待客户端连接
    s.listen(3)
# 建立最多三个连接监听,在拒绝连接之前，操作系统可以挂起的最大连接数量。
    i=1
    n=0
# 4 连接成功后，发送/接收数据
    while True:
    # (阻塞式)等待连接的到来
        conn, addr = s.accept()
    # conn是新的套接字对象，可以用来接收和发送数据。address是连接客户端的地址。
        num=[0]
        print("欢迎{}连接".format(addr))
        number=str(addr)
        number=number[2:16]
        #print(type(addr))
        #print(type(number))

        if judge(num,addr):
            number=addr
        else:
            num.append(addr)

        #while True:

        data = conn.recv(1024)
        dt = data.decode('utf-8')
        print("服务器收到{}".format(dt))
        print("服务器发送：")
            #p = input()
            #if p == 'quit':
             #   conn.close()
              #  s.close()
            #else:
             #   conn.send(p.encode('utf-8'))

            #数据库插入数据
        data_time=time.strftime("%Y-%m-%d %X", time.localtime())
        sql = " INSERT INTO test(id,high,time,equipment) VALUES(%s,%s,%s,%s) "
        data = (i, dt, data_time,number)
        i+=1
        result = connect.writeDb(sql, data)
        if result:
            print("插入数据成功")
        else:
            print("插入数据失败")
        time.sleep(1)


if __name__=='__main__':
    server()