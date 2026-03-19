from models import Animal, Cat, Dog


def main():
    animals = [
        Animal("Lucky", 4, "white"),
        Dog("Rex", 3, "brown", "Labrador"),
        Cat("Mimi", 2, "black", True),
    ]

    for animal in animals:
        print(animal)
        print(animal.eat())
        print(animal.sleep())
        print(animal.speak())

        if isinstance(animal, Dog):
            print(animal.fetch())
        elif isinstance(animal, Cat):
            print(animal.climb())

        print("-" * 30)


if __name__ == "__main__":
    main()
