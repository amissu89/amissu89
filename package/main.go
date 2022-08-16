package main

import (
	"fmt"
	m "go/package/lib"
)

func main() {
	fmt.Println("package main go")
	xs := []float64{1, 2, 3, 4}
	avg := m.Average(xs)
	fmt.Println(avg)
}
