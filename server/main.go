package main

import (
	"encoding/gob"
	"fmt"
	"net"
)

func server() {
	listener, err := net.Listen("tcp", ":9999")

	if err != nil {
		fmt.Println(err)
		return
	}

	defer listener.Close()

	fmt.Println("Listener ok...")

	for {
		conn, err := listener.Accept()
		if err != nil {
			fmt.Println(err)
			continue
		}

		fmt.Println("conn ok...")

		go handleServerConnection(conn)

	}
}

func handleServerConnection(c net.Conn) {
	var msg string
	err := gob.NewDecoder(c).Decode(&msg)
	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Println("Received : ", msg)
	}

	c.Close()
}

func main() {
	go server()

	var input string
	fmt.Scanln(&input)
}
