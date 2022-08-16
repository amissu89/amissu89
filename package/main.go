package main

import (
	"fmt"
	m "go/package/lib"
	"io"
	"io/ioutil"
	"log"
	"os"
	"strings"
)

func main() {
	fmt.Println("package main go")
	xs := []float64{1, 2, 3, 4}
	avg := m.Average(xs)
	fmt.Println(avg)

	r := strings.NewReader("Go is a general-purpose language designed with systems programming in mind.")

	b, err := io.ReadAll(r)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Printf("%s\n\n", b)

	file, err := os.Open("D:\\toyproject\\amissu89\\package\\test.txt")
	if err != nil {
		fmt.Println(err)
		return
	}

	defer file.Close()

	stat, err := file.Stat()
	if err != nil {
		fmt.Println(err)
		return
	}

	bs := make([]byte, stat.Size())
	_, err = file.Read(bs)
	if err != nil {
		fmt.Println(err)
		return
	}

	str := string(bs)
	fmt.Println(str)

	//short way
	bs, err = ioutil.ReadFile("test.txt")
	if err != nil {
		fmt.Println(err)
		return
	}

	str = string(bs)
	fmt.Println(str)

	file, err = os.Create("abc.txt")
	if err != nil {
		fmt.Println(err)
		return
	}

	file.WriteString("hello world2")

	dir, err := os.Open(".")
	if err != nil {
		return
	}

	defer dir.Close()

	fileInfos, err := dir.Readdir(-1)
	if err != nil {
		return
	}

	for _, fi := range fileInfos {
		fmt.Println(fi.Name())
	}

}
