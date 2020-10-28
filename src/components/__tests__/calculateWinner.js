import React from "react";
import calculateWinner from "../TicTacToe/calculateWinner";

var testBoard = [null, null, null, null, null, null,null, null, null];
test('test board calculateWinner 0, 1, 2', () => {
	testBoard = ["x", "x", "x", null, null, null,null, null, null];
  expect(calculateWinner(testBoard)).toBe('x');
});

test('test board calculateWinner 3, 4, 5', () => {
	testBoard = [null, null, null, "x", "x", "x",null, null, null];
  expect(calculateWinner(testBoard)).toBe('x');
});

test('test board calculateWinner 6, 7, 8', () => {
	testBoard = [null, null, null, null, null, null,"x", "x", "x"];
  expect(calculateWinner(testBoard)).toBe('x');
});

test('test board calculateWinner 0, 3, 6', () => {
	testBoard = ["x", null, null, "x", null, null,"x", null, null];
  expect(calculateWinner(testBoard)).toBe('x');
});

test('test board calculateWinner 1, 4, 7', () => {
	testBoard = [null, "x", null, null, "x", null,null, "x", null];
  expect(calculateWinner(testBoard)).toBe('x');
});

test('test board calculateWinner 2, 5, 8', () => {
	testBoard = [null, null, "x", null, null, "x",null, null, "x"];
  expect(calculateWinner(testBoard)).toBe('x');
});
test('test board calculateWinner 0, 4, 8', () => {
	testBoard = ["x", null, null, null, "x", null,null, null, "x"];
  expect(calculateWinner(testBoard)).toBe('x');
});
test('test board calculateWinner 2, 4, 6', () => {
	testBoard = [null, null, "x", null, "x", null,"x", null, null];
  expect(calculateWinner(testBoard)).toBe('x');
});

