"use server";

export async function fetchProducts(){
    const response = await fetch('https://fakestoreapi.com/products');
    const data= response.json();
    return data;
  }