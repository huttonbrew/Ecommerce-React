import {GET_ITEMS,  ADD_ITEMS, DELETE_ITEM,
     INCREASE_ITEM, DECREASE_ITEM, 
    TOTAL_ITEMS, DETAILS
} from '../actions/types';


const initialState ={
    items:[
        {
            "id": 201,
            "name": "The Power of HABIT",
            "price": 207,
            "subCategoryId": 101,
            "categoryId": 1,
            "rate": 2.44,
            "content": "The Power of HABIT: Why We Do What We Do in Life and Business. A young woman walks into a laboratory. Over the past two years, she has transformed almost every aspect of her life. She has quit smoking, run a marathon, and been promoted at work. The patterns inside her brain, neurologists discover, have fundamentally changed.",
            "review": 78,
            "typeVariant": "D",
            "colorVariant": "5",
            "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/51ejXdSceNL._AA300_.jpg",
            "count": 1
          },
          {
            "id": 202,
            "name": "Think and Grow Rich",
            "price": 271,
            "subCategoryId": 101,
            "categoryId": 1,
            "rate": 2.18,
            "content": "Think and Grow Rich!' explains entrepreneur Andrew Carnegie’s secret to success, revealed to Napoleon Hill during private interviews with Carnegie, the richest man of his time, and during more than 20 years of research into the lives and philosophies of more than 500 of the most successful people in America. This timeless classic presents a systematic nuts-and-bolts approach to developing the skills and mindset required to achieve exceptional success in any field or endeavor, personal or professional. Hill explains in detail 13 steps required to achieve those goals. The book contains numerous self-tests and checklists.",
            "review": 67,
            "typeVariant": "A",
            "colorVariant": "4",
            "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/51ZouHoBGtL._SX315_BO1,204,203,200_.jpg",
            "count": 1
          },
          
    
        
        
    
          {
            "id": 3,
            "name": "The 7 Habits of Highly Effective People",
            "content": "The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change. The 7 Habits of Highly Effective People, the beloved classic that has sold over 20 million copies worldwide, is celebrating its 25th anniversary with this reissue! With a new foreword, the wisdom of the 7 Habits still holds true after all these years. The 7 Habits have become so famous because they work. They have been integrated into everyday thinking by many millions of people. The reason: They work. Habit 1: Be Proactive. Habit 2: Begin with the End in Mind. Habit 3: Put First Things First. Habit 4: Think Win/Win. Habit 5: Seek First to Understand, Then to Be Understood. Habit 6: Synergize. Habit 7: Sharpen the Saw. The book presents a principle-centered approach for solving personal and professional problems.",
            "price": 11.48,
            "author": "Stephen R. Covey",
            "type": "paperback",
            "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/51Myx6jMujL._AA300_.jpg",
            "count": 1,
            "category": "business",
            
          },
          {
            "id": 4,
            "name": "Principles: Life and Work",
            "content": "In Principles, Dalio shares what he's learned over the course of his remarkable career. He argues that life, management, economics, and investing can all be systemized into rules and understood like machines.",
            "price": 18.00,
            "author": "Ray Dalio",
            "type": "hardcover",
            "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/51UyMOpP%2BGL._AA300_.jpg",
            "inCart": false,
            "category": "business",
            "count": 1
          },
          {
            "id": 5,
            "name": "How to Win Friends & Influence People",
            "content": "For more than sixty years the rock-solid, time-tested advice in this book has carried thousands of now famous people up the ladder of success in their business and personal lives. Now this previously revised and updated bestseller is available in trade paperback for the first time to help you achieve your maximum potential throughout the next century!",
            "price": 9.60,
            "author": "Dale Carnegie",
            "type": "paperback",
            "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/51PWIy1rHUL._AA300_.jpg",
            "inCart": false,
            "category": "business",
            "count": 1,
          },
          {
            "id": 6,
            "name": "The Whole 30",
            "content": "Since 2009, Melissa Hartwig’s critically-acclaimed Whole30 program has quietly led hundreds of thousands of people to effortless weight loss and better health—along with stunning improvements in sleep quality, energy levels, mood, and self-esteem. The program accomplishes all of this by specifically targeting people’s habits and emotional relationships with food. The Whole30 is designed to help break unhealthy patterns of behavior, stop stress-related comfort eating, and reduce cravings, particularly for sugar and carbohydrates. Many Whole30 participants have described achieving 'food freedom'—in just thirty days.",
            "price": 18.00,
            "author": "Melissa Hartwig",
            "type": "hardcover",
            "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/61WFjEDBktL._SX437_BO1,204,203,200_.jpg",
            "inCart": false,
            "category": "cookbooks",
            "count": 1,
          },
          {
            "id": 7,
            "name": "The Food Lab",
            "content": "Ever wondered how to pan-fry a steak with a charred crust and an interior that's perfectly medium-rare from edge to edge when you cut into it? How to make homemade mac 'n' cheese that is as satisfyingly gooey and velvety-smooth as the blue box stuff, but far tastier? How to roast a succulent, moist turkey (forget about brining!)―and use a foolproof method that works every time?",
            "price": 33.94,
            "author": "J. Kenji López-Alt",
            "type": "harcover",
            "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/419aGgQt-5L._SX392_BO1,204,203,200_.jpg",
            "inCart": false,
            "category": "cookbooks",
            "count": 1,
          },
          {
            "id": 10,
            "name": "True Fiction (Ian Ludlow Thrillers)",
            "content": "A breakneck thriller where truth and fiction collide for the unluckiest writer alive.",
            "price": 4.99,
            "author": "Lee Goldberg",
            "type": "kindle",
            "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/51UbplnqSgL._SX331_BO1,204,203,200_.jpg",
            "inCart": false,
            "category": "mystery",
            "count": 1,
          },
          {
            "id": 11,
            "name": "The Last Move",
            "content": "An FBI agent must catch a copycat killer. The only difference this time: she's the final victim.",
            "price": 7.91,
            "author": "Mary Burton",
            "type": "paperback",
            "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/514jRDA21TL._AA300_.jpg",
            "inCart": false,
            "category": "mystery",
            "count": 1,
          },
          {
            "id": 12,
            "name": "Stillhouse Lake (Stillhouse Lake Series)",
            "content": "Gina Royal is the definition of average—a shy Midwestern housewife with a happy marriage and two adorable children. But when a car accident reveals her husband’s secret life as a serial killer, she must remake herself as Gwen Proctor—the ultimate warrior mom.",
            "price": 8.96,
            "author": "Rachel Caine",
            "type": "paperback",
            "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/41RTt7alEqL._SX332_BO1,204,203,200_.jpg",
            "inCart": false,
            "category": "mystery"
            ,
            "count": 1,
          },
          {
            "id": 16,
            "name": "Harry Potter and the Sorcerer's Stone",
            "content": "On Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!",
            "price": 24.64,
            "author": "J.K.Rowling",
            "type": "hardcover",
            "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/51qlgJ6ZojL.jpg",
            "inCart": false,
            "category": "scifi",
            "count": 1,
          },
          {
            "id": 17,
            "name": "A Game of Thrones: A Song of Ice and Fire, Book 1",
            "content": "As a whole, this series comprises a genuine masterpiece of modern fantasy, bringing together the best the genre has to offer. Magic, mystery, intrigue, romance, and adventure fill these pages and transport us to a world unlike any we have ever experienced.",
            "price": 25.16,
            "author": "George R. R. Martin",
            "type": "hardcover",
            "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/51n5SAiAz7L._AA300_.jpg",
            "inCart": false,
            "category": "accessories",
            "count": 1,
          },
          {
            "id": 18,
            "name": "The Lord of the Rings: One Volume",
            "content": "In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others.",
            "price": 27.66,
            "author": "J.R.R. Tolkien",
            "type": "hardcover",
            "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/51d4G0sFMzL.jpg",
            "inCart": false,
            "category": "scifi",
            "count": 1,
          },
    ],

    cart:[],
    isOpen:false,
    total:0,
    shipping:10
    }

    const Todos = (state=initialState, action)=>{

        switch(action.type){
     
            // get initial state
            case GET_ITEMS:
                return{
                    ...state
                }
    
        
    
           
    
          
        
        //   add items to cart
        case ADD_ITEMS:
    
        let check =state.cart.find(item=>item._id===action.payload);
       
        if(!check){
            // bringing only the ites that match the id
            let items = state.items.filter(item=>item._id===action.payload);
            let itemsCart = [...state.cart, ...items]
    
            return{
                ...state,
                cart:itemsCart
            }
        }
    
        else{
            let items = state.items.filter(item=>item._id===action.payload);
    
            items.forEach(item=>{
                item.isInCart=true
                // alert(`already in cart`)
            })
    
            return{
                ...state
            }
        }
    
        
    
    
            // delete item
            case DELETE_ITEM:
            
            const filteredCart = state.cart.filter(item=>item._id!==action.payload);
            
            return{
              ...state,
              cart:filteredCart
            } 
            
            
            // increasing ites inside cart
            case INCREASE_ITEM :
          
             let incResults = state.cart.map(item=>{
                 if(item._id===action.payload){
                     item={...item, count:item.count +1}
                 }
                 return item
             })
    
            return{
                ...state,
                cart:incResults
    
            }
    
            // decrease item inside the cart
            case DECREASE_ITEM:
                
            let decResults = state.cart.map(item=>{
                if(item._id===action.payload){
                    item={...item, count:item.count===1 ?item.count=1:item.count - 1}
                }
                return item;
            })
    
            return{
               ...state,
               cart:decResults
    
                }
    
            //get total price 
           case TOTAL_ITEMS:
    
             const totals = state.cart.reduce((prev, item)=>{
               return prev + (item.price * item.count)
             },0)
    
            return{
                ...state,
                total:totals
            }
          
    
        case DETAILS:
            
            return{
                ...state
            }
        
    
    
    
    
    
    
    
        
    
         default:
              return state
    
        }
    


    }

    
    
    

    export default Todos;




        