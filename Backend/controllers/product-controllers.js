const product = require("../model/product");

const getAllProducts = async(req,res,next) =>{
    let products;
    try {
        products = await product.find();
    } catch (error) {
        console.log(error);
    }
if(!products){
    return res.status(404).json({message:"no products found"})
}else{
    return res.status(200).json({products})
}
}
const addProduct = async(req,res,next) =>{
    const {heading,Products,item,price} = req.body
    let products;
    try {
        products = new product({
            heading,
            Products,
            item,
            price
        })
        await products.save();
    } catch (error) {
        console.log(error)
        
    }
    if(!products){
        return res.status(404).json({message:"unable to add product"})
    }else{
        return res.status(200).json({products});
    }
}
const updateProduct = async(req,res,next) =>{
    const id = req.params.id;
    const {heading,Products,item,price} = req.body;
    let products;
    try {
        products = await product.findByIdAndUpdate(id,{
            heading,
            Products,
            item,
            price
        });
        await products.save();
    } catch (error) {
       console.log("product is not updated"); 
    }
    if(!products){
       return res.status(402).json({message:"product is not available"});
    }else{
       return res.status(201).json({products, message:"product is updated" });
    }
}; 
const getById = async (req,res,next) => {
    const id = req.params.id;
    let products;
    try {
        products = await product.findById(id);
        
    } catch (error) {
        console.log(error);
        
    }
    if(!products){
        return res.status(404).json({message:"no Book is found by this id"});
    }else{
        return res.status(202).json({products});
    }
};
const deleteById = async (req,res,next) => {
    const id = req.params.id;
    let products;
    try {
       products = await product.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
    }
    if(!products){
        return res.status(402).json({message:"no product is available on this id"});
    }else{
        return res.status(201).json({products,message:"product is deleted"});
    }
}
// const deleteItemById = async (req,res,next) => {
//     const id = req.params.id;
//     let products;
//     try {
//        products = await product.findByIdAndDelete({heading } id);
//     } catch (error) {
//         console.log(error);
//     }
//     if(!products){
//         return res.status(402).json({message:"no product is available on this id"});
//     }else{
//         return res.status(201).json({products,message:"product is deleted"});
//     }
// }
const updateItem = async(req,res,next) =>{
    const id = req.params.id;
    const {heading,Products,item,price} = req.body;
    let products;
    try {
        products = await product.products.findByIdAndUpdate(id,{
            $set:req.body,
            heading,
            Products,
            item,
            price
        });
        await products.save();
    } catch (error) {
       console.log("product is not updated"); 
    }
    if(!products){
       return res.status(402).json({message:"product is not available"});
    }else{
       return res.status(201).json({products, message:"item is updated" });
    }
}; 

exports.getAllProducts = getAllProducts;
exports.addProduct = addProduct;
exports.updateProduct = updateProduct;
exports.getById = getById;
exports.deleteById = deleteById;
exports.updateItem = updateItem;

