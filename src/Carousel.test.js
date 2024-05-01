import React from "react";
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon";


test("it renders without crashing", () => {
    
    render(
    <Carousel photos={TEST_IMAGES} title="test images"/>);
})

test("it matches snapshot", () => {
    const {asFragment} = render(
    <Carousel photos={TEST_IMAGES} title="test images"/>);
    expect(asFragment()).toMatchSnapshot()
})


test("left arrow goes back an image", () => {
    const {container} = render(
        <Carousel photos={TEST_IMAGES} title="test images"/>)
    const leftArrow = container.querySelector(".bi-arrow-left-circle");
    const secondImage = container.querySelector('img[caption="testing image 2"')
    const firstImage = container.querySelector('img[caption="testing image 1"')
    expect(secondImage).toBe(secondImage)
    fireEvent.click(leftArrow);
    expect(firstImage).toBe(firstImage)
})


test("left arrow is removed on first image", () => {
    const {container} = render(
        <Carousel photos={TEST_IMAGES} title="test images"/>)
    const leftArrow = container.querySelector(".bi-arrow-left-circle");
    const secondImage = container.querySelector('img[src="test2.com"')
    const firstImage = container.querySelector('img[src="test1.com"')
    expect(secondImage).toBe(secondImage)
    expect(leftArrow).toBeInTheDocument
    fireEvent.click(leftArrow);
    expect(firstImage).toBe(firstImage)
    expect(leftArrow).not.toBeInTheDocument
})

test("right arrow is removed on last image", () => {
    const {container} = render(
        <Carousel photos={TEST_IMAGES} title="test images"/>)
    const rightArrow = container.querySelector(".bi-arrow-right-circle");
    const secondImage = container.querySelector('img[src="test2.com"')
    const thirdImage = container.querySelector('img[src="test3.com"')
    expect(secondImage).toBe(secondImage)
    expect(rightArrow).toBeInTheDocument
    fireEvent.click(rightArrow);
    expect(thirdImage).toBe(thirdImage)
    expect(rightArrow).toBeInTheDocument
})
