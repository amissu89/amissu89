package math

func Average(xs []float64) float64 {
	total := float64(0)
	for _, val := range xs {
		total += val
	}

	return total / float64(len(xs))
}
