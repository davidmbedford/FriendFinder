# FriendFinder
This app utilizes node.express to provide a simple friend-finding service.

 # Bamazon: The CLI Store-front
This app uses a CLI to provide a stripped-down online storefront. 

### What it does
This app has two components:
1. Bamazon Customer
   * This component is for users interested in purchasing items through the application. Upon start, they will be displayed with a full stock list and asked what they would like to buy, and how much.
   * items purchased will be deducted from the inventory. If there is insufficient stock, the customer will be notified.
   
   Video: https://www.youtube.com/watch?v=4pWMpgviwIY&feature=youtu.be
   
2. Bamazon Manager
   * This component is for company managers. Upon start, they will be given for options.
     1. The option to view all products.
     2. The option to view all low inventory (stock below 5).
     3. The option to increase the quantity of a specific product.
     4. The option to add a completely new product to the inventory.
   
   Video: https://www.youtube.com/watch?v=Hh5dcEebi-0&feature=youtu.be

### How it works
This app uses Node.js technology to run in the command line. For my project - and all others - I use Git Bash as my CLI.

Languages/tools:
   * JavaScript
   * Node:
     * MySql
     * Inquirer

To run this application: 
   1. Download it and navigate to the folder in your command line.
   2. Run "npm install". 
   3. Enter "node <file>" where file is the app you want to run.
      * bamazonCustomer.js
      * bamazonManager.js
   4. From there, follow the prompts.
   5. If you want to close the application, hit CTRL+C. 

This app made entirely by: davidmbedford1. 

