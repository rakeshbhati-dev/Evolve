let itemList=[]
const getAllItem=(req,res)=>{
    return res.status(200).json({message:"Item Founds",itemList:itemList})
}

const addItem=(req,res)=>{
   const {item}=req.body
   if(!item) return res.status(400).json({message:"No item provided"})
   const obj={
    id:crypto.randomUUID(),
    item:item
   }

   itemList.push(obj)
   return res.status(201).json({message:"Item Added Successfully.",item:obj})
}

const updateItem=(req,res)=>{
    const {item}=req.body
    const {id}=req.params
    if(!item) return res.status(400).json({message:"No Item provided."});
    let result= itemList.find((ele)=>ele.id===id)
    if(!result) return res.status(404).json({message:"No item found."});

    let updatedItemList=itemList.map((ele)=>ele.id===id?{id:id,item:item}:ele)
    itemList=updatedItemList
    return res.status(200).json({message:"Item updated Successfully",itemList:itemList})
}

const deleteItem=(req,res)=>{
    const {id}=req.params
    let findItem=itemList.find((ele)=>ele.id===id)
    if(!findItem) return res.status(404).json({message:"No item found"});

    itemList=itemList.filter((ele)=>ele.id!==id)
    return res.status(200).json({message:"Item Deleted Successfully",itemList:itemList})
}

export {getAllItem,addItem,updateItem,deleteItem}