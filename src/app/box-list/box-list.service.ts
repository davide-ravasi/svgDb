import { Box } from '../shared/box.model';
import { Tag } from '../shared/tag.model';

export class BoxListService {
  private boxes: Box[] = [
    new Box(
        'Home',
        'http://simpleicon.com/wp-content/uploads/rocket.png',
        [
            new Tag('school'),
            new Tag('student')
        ]
    ),
    new Box(
        'graduate',
        'https://cdn.onlinewebfonts.com/svg/img_93271.png',
        [
            new Tag('works'),
            new Tag('university')
        ]
    )
  ];

  getBoxes() {
    return this.boxes.slice();
  }
  getBox(id: number) {
    return this.boxes[id];
  }

  addBox(box: Box) {
    this.boxes.push(box);
  }

/*   addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  } */
}