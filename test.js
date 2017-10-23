class Human extends React.Component {

    name = "";
    health = 100;

    render() {
        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }

    isAlive() {
        if (this.health > 0) {
            return true;
        } else {
            return false;
        }
    }

    takesDamage(damage) {
        this.health = health - damage;
    }

}

class Baseball {
    isNew = true;
    isOwned = false;
    owner;

    setOwner(variable) {
        this.owner = variable;
        this.isNew = false;
    }

    getOwnerName() {
        return this.owner.name;
    }

}

var buck = new Human();
var buck2 = buck;
var luke = new Human();
var ball = new Baseball();

ball.setOwner(buck);
ball.getOwnerName();

//ball.setOwner(luke);

//buck.takesDamage(60);

buck.isAlive();

buck.takesDamage(50);

buck.isAlive();
luke.isAlive();

print(buck.health);
print(luke.health);

buck.name = "buck";

ball.getOwnerName();

print(buck.name);
print(luke.name);

function happy(variable) {

    if (variable == "cool") {
        return true;
    } else {
        return false;
    }
}

