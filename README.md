<h2>Instructions on how to run the application locally</h2>

<ul>
    <li>At first open postman software</li>
    <li>Create a collection with relavent name of the project</li>
    <h3>Create a New Product </h3>
    <li>Add a post request under the collection</li>
    <li>In URL box of postman write the url: https://product-management-server-weld.vercel.app/api/products</li>
    <li>In body of postmant insert a data of a porduct like following</li></br>
    <p> 
    {
    "name": "cap",
    "description": "Best quantity cap",
    "price": 500,
    "category": "Cloth",
    "tags": ["cap", "head", "dress"],
    "variants": [
        {
            "type": "color",
            "value": "Black"
        },
        {
            "type": "size",
            "value": "S"
        }
    ],
    "inventory": {
        "quantity": 60,
        "inStock": true
    }
}
     </p>
     <p>Note: Variants of type must "color" or "size". If type is color the value will be "Red" or "Black" or "White" or "Blue" or "Purple" or "Silver". Outsite of above type or values an error shown</p>
     <li>After submission the following response will be show</li>
     <p>
     {
    "success": true,
    "message": "Product created successfully!",
    "data": {
        "name": "cap",
        "description": "Best quantity cap.",
        "price": 500,
        "category": "Cloth",
        "tags": [
            "cap",
            "head",
            "dress"
        ],
        "variants": [
            {
                "type": "color",
                "value": "Black"
            },
            {
                "type": "size",
                "value": "S"
            }
        ],
        "inventory": {
            "quantity": 60,
            "inStock": true
        },
        "_id": "6657e9bb3d1724103c9fcf9a",
        "__v": 0
    }
}
 <p>

<ul>
<h4>Others operation executed by the instruction of assignment requirment</h4>
