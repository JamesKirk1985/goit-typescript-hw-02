/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component<T> {
  constructor(public props: T) {}
}
interface InterfaceProps {
  title: string;
}
class Page extends Component<InterfaceProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
