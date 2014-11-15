// NOTE
// THIS FILE CONTAINS THE STAFF MEMBER FUNCTIONALITY AND EXTRA COMMENTS FOR USE GUIDE ETC..

var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity){
        switch (item){
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    voidLastTransaction : function(){
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    applyStaffDiscount: function(employee){
        this.total -= this.total * (employee.discountPercent / 100);
    }

};

function StaffMember(name,discountPercent){
    this.name = name;
    this.discountPercent = discountPercent;
}

var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);
var me = new StaffMember("Irshad",20);

// cashRegister.scan('eggs',1); (for scanning in an item like eggs, followed by quantity)

// cashRegister.applyStaffDiscount(me); (for applying a staff discount)

//toFixed(); converts an number into a string and makes it have x decimal places (according to argument).
console.log('Your bill is '+cashRegister.total.toFixed(2));
