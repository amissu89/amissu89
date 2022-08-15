package main

import (
	"fmt"
	"math"
)

func distance(x1, x2, y1, y2 float64) float64 {
	a := x2 - x1
	b := y2 - y1
	return math.Sqrt(a*a + b*b)
}

func rectangleArea(x1, x2, y1, y2 float64) float64 {
	l := distance(x2, x2, y2, y1)
	w := distance(x2, x1, y1, y1)
	return l * w
}

// func circleArea(x, y, r float64) float64 {
// 	return r * r * math.Pi
// }

func circleArea(circle *Circle) float64 {
	return math.Pi * circle.r * circle.r
}

func (circle *Circle) area() float64 {
	return math.Pi * circle.r * circle.r
}

func (rect *Rect) area() float64 {
	l := distance(rect.x2, rect.x2, rect.y2, rect.y1)
	w := distance(rect.x2, rect.x1, rect.y1, rect.y1)

	return l * w
}

type Circle struct {
	x, y, r float64
}

type Rect struct {
	x1, y1, x2, y2 float64
}

type Person struct {
	Name string
}

func (p *Person) Talk() {
	fmt.Println("Hi my name is " + p.Name)
}

func main() {
	fmt.Println("advanced go")
	var rx1, ry1 float64 = 0, 0
	var rx2, ry2 float64 = 10, 10

	/*
		var c Circle
		c := new(Circle)
		c := Circle{x:0, y=0, r=5}
	*/
	circle := Circle{0, 0, 5}
	rect := Rect{0, 0, 10, 10}
	fmt.Println(circle)

	fmt.Printf("Rect Area %f\n", rectangleArea(rx1, rx2, ry1, ry2))
	fmt.Printf("Rect Area 2 %f\n", rect.area())

	fmt.Printf("Circle Area 1 %f\n", circleArea(&circle))
	fmt.Printf("Circle Area 2 %f\n", circle.area())

	person := Person{Name: "이용림"}
	fmt.Println(person.Name)
	fmt.Println(person.Talk())
}
