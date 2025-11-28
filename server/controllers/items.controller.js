import Item from '../models/items.model.js'

let demo = []
const getAllItem = async (req, res) => {
    try {
        const itemList = await Item.find()
        return res.status(200).json({ message: "Item Founds", itemList: itemList })
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong.", error: error })
    }
}

const addItem = async (req, res) => {
    const { item } = req.body
    try {
        let result = await Item.create({ item: item })
        return res.status(201).json({ message: "Item Added Successfully.", item: result })
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong.", error: error })
    }
}

const updateItem = async (req, res) => {
    const { item } = req.body
    const { id } = req.params
    if (!item) return res.status(400).json({ message: "No Item provided." });
    try {
        let result = await Item.findByIdAndUpdate(id, { item: item }, { new: true })
        return res.status(200).json({ message: "Item updated Successfully", item: result })
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong.", error: error })
    }
}

const deleteItem = async (req, res) => {
    const { id } = req.params
    try {
        await Item.findByIdAndDelete(id)
        return res.status(200).json({ message: "Item Deleted Successfully" })
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong.", error: error })
    }
}

export { getAllItem, addItem, updateItem, deleteItem }