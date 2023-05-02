# coding=utf-8
import socket


def client():
    print("客户端启动")
    # 1 创建套接字
    c = socket.socket()
    port = 8888
    host = '192.168.137.246'

    # 2 连接地址和端口
    c.connect((host, port))

    # 3 连接成功后，发送/接收数据
    while True:
        print("客户端发送：")
        a = input()
        if a == 'quit':
            c.close()
            exit(0)
        else:
            c.send(a.encode('utf-8'))
            data = c.recv(1024)
            print("客户端收到：{}".format(data))


if __name__ == '__main__':
    client()
