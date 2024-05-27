// Implement a function which behaves like the uniq command in UNIX.

// It takes as input a sequence and returns a sequence in which all duplicate elements following each other have been reduced to one instance.

// Example:

// ["a", "a", "b", "b", "c", "a", "b", "c"]  =>  ["a", "b", "c", "a", "b", "c"]

// https://www.codewars.com/kata/52249faee9abb9cefa0001ee

const uniq = (a) => a.filter((el, i) => el !== a[i - 1])
