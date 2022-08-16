package main

import "fmt"

func main() {
	fmt.Println("hello go world")

	var msg string = "apple"

	msg = "good morning"

	fmt.Println(len(msg))
	fmt.Println(msg[1])
	fmt.Println("good " + "morning")

	var hello string = "hello world"
	fmt.Println(hello)

	hello = "first "
	hello += " second"

	fmt.Println(hello)

	x := "Brave new world"
	fmt.Println(x)

	const NAME string = "이용림"
	fmt.Println(NAME)

	var (
		a = 10
		b = 33.21
		c = "gucci"
	)

	fmt.Println(a)
	fmt.Println(b)
	fmt.Println(c)

	fmt.Print("Enter a number : ")

	// fmt.Scanf("%f", &b)
	// output := b * 2
	// fmt.Println(output)

	fmt.Println(`1
	2
	3
	4
	5
	6
	6
	7`)

	for i := 1; i <= 10; i++ {
		if i%2 == 0 {
			fmt.Print("Even : ")
		} else {
			fmt.Print("Odd : ")
		}
		fmt.Println(i)
	}

	value := 10
	switch value {
	case 9:
		fmt.Println("Nine")
	case 10:
		fmt.Println("Ten")
	default:
		fmt.Println("Unknown Number")
	}

	var arr [5]float64
	arr[0] = 98
	arr[1] = 93
	arr[2] = 77
	arr[3] = 82
	arr[4] = 83

	var total float64 = 0
	for i, val := range arr {
		total += val
		fmt.Printf("this is %d\n", i)
	}
	fmt.Println(total / float64(len(arr)))

	total = 0
	for _, val := range arr {
		total += val
	}
	fmt.Println(total / float64(len(arr)))

	arr2 := [5]float64{1,
		2,
		3,
		4,
		5,
	}
	fmt.Println(arr2)

	sli := []int{1, 2, 3}
	sli2 := append(sli, 4, 5)
	sli3 := make([]int, 2)

	copy(sli3, sli)
	fmt.Println(sli, sli3)

	fmt.Println(sli2)

	mm := make(map[string]int)
	mm["key"] = 33
	mm["daejeon"] = 42

	fmt.Println(mm)

	delete(mm, "key")
	fmt.Println(mm["key"])

	if mm["key"] == 0 {
		fmt.Println("empty")
	}

	elements := map[string]string{
		"H":  "Hydrogen",
		"He": "Helium",
		"Li": "Lithium",
	}

	fmt.Println(elements)

	if name, ok := elements["Na"]; ok {
		fmt.Println(name, ok)
	}

	test3 := make([]int, 3, 9)
	fmt.Println(test3)
	fmt.Println(len(test3))

	test4 := [6]string{"a", "b", "c", "d", "e", "f"}
	fmt.Println(test4[2:5])

	test5 := []int{
		48, 96, 86, 68,
		57, 82, 63, 70,
		37, 34, 83, 27,
		19, 97, 9, 17,
	}

	small := test5[0]
	for _, val := range test5 {
		if val < small {
			small = val
		}
	}

	fmt.Printf("small : %d\n", small)

	avgArr := []float64{98, 93, 77, 82, 84}
	fmt.Printf("average :%f\n", average(avgArr))
	fmt.Println(f2())

	res1, res2 := f3()
	fmt.Println(res1, res2)

	fmt.Println(add(10, 7, 89, 1111))
	fmt.Println(add(test5...))

	multiply := func(x int, y int) int {
		return x * y
	}

	fmt.Println(multiply(10, 20))

	nextEven := makeEvenGenerator()
	fmt.Println(nextEven())
	fmt.Println(nextEven())
	fmt.Println(nextEven())

	// defer second()
	// first()

	// defer func() {
	// 	str := "recover()"
	// 	fmt.Println(str)
	// }()

	x1 := 5
	zero(&x1)
	fmt.Println(x1)

	xPtr := new(int)
	one(xPtr)
	fmt.Println(*xPtr)
}

func one(xptr *int) {
	*xptr = 1
}

func zero(xptr *int) {
	*xptr = 0
}

func average(xs []float64) float64 {
	total := 0.0
	for _, val := range xs {
		total += val
	}
	return total / float64(len(xs))
}

func f2() (r int) {
	r = 1
	return
}

func f3() (int, int) {
	return 6, 7
}

func add(args ...int) int {
	total := 0
	for _, val := range args {
		total += val
	}
	return total
}

func makeEvenGenerator() func() uint {
	i := uint(0)
	return func() (ret uint) {
		ret = i
		i += 2
		return
	}
}

func first() {
	fmt.Println("first")
}
func second() {
	fmt.Println("second")
}
