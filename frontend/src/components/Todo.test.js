import Todo from "./Todo";
import React from "react";
import {render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("renders description and status", () => {
    //Given
    const {getByText} = render (<Todo id="123" description="description" status="OPEN"/>)

    //When
    const actual = getByText(/description/i && /OPEN/i)

    //Then
    expect(actual).toBeInTheDocument()
})

test("that advance button is hidden when status is DONE", () => {
    //Given
    const {queryByRole} = render (<Todo id="123" description="description" status="DONE"/>)

    //When
    const button = queryByRole("button", {name:/advance/i})

    //Then
    expect(button).not.toBeInTheDocument()
})

test("that advance button is visible when status is OPEN", () => {
    //Given
    const {getByRole} = render (<Todo id="123" description="description" status="OPEN"/>)

    //When
    const button = getByRole("button", {name:/advance/i})

    //Then
    expect(button).toBeInTheDocument()
})

test("no buttons are shown when showButtons is false", () => {

    //Given
    const {queryByRole} = render (<Todo id="123" description="description" status="OPEN" showButtons={false}/>)

    //When
    const button = queryByRole("button")

    //Then
    expect(button).not.toBeInTheDocument()

})

test("onAdvance is called with the todo’s data on click of advance button", () => {

    //Given
    const handler = jest.fn()
    const {getByRole} = render (<Todo id="123" description="description" status="OPEN" showButtons={true} onAdvance={handler}/>)

    //When
    const button = getByRole("button", {name:/advance/i})
    userEvent.click(button)

    //Then
    expect(handler).toHaveBeenCalledWith({"description": "description", "id": "123", "status": "OPEN"})
})