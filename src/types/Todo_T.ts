import {SelectedCategories_E} from '../enums/SelectedCategories_E';
import {CompletedCategories_E} from '../enums/completed_E';

export type TodoListItem = {
  id: number, title: string, completed: CompletedCategories_E, category: SelectedCategories_E
};
