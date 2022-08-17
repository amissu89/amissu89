package main

import (
	"encoding/gob"
	"fmt"
	"net"
)

func client() {
	conn, err := net.Dial("tcp", "localhost:9999")

	fmt.Println("conn ok....")

	defer conn.Close()

	if err != nil {
		fmt.Println(err)
		return
	}

	msg := "hello world"
	fmt.Println("Sending", msg)
	err = gob.NewEncoder(conn).Encode(msg)
	if err != nil {
		fmt.Println(err)
	}

	conn.Close()
}

func main() {
	go client()

	var input string
	fmt.Scanln(&input)
}
