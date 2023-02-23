import { Post } from './components/pages/PostEditDetails';

export const INITIAL_POST_LIST: Post[] = [
  {
    id: '1',
    author: 'Andre Chay Sonda',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageURL:
      'https://assets.website-files.com/6231c31a6f6b11d3790a8978/63f54854dc6b0b143182a3c1_BlogCover_Build-employee-comm.jpg',
    title: 'Foo',
    publishedOn: 'Thu Feb 23 2023',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus tellus ut justo maximus, ultrices semper erat porta. Pellentesque interdum pellentesque finibus. Donec sed consectetur orci. Ut nunc tellus, volutpat at blandit non, dignissim at nisi. Nulla nec tortor nec sem lacinia vulputate. Integer nisi turpis, varius a efficitur sit amet, blandit ac orci. Fusce ut nibh luctus, consequat lorem id, auctor dolor. Mauris vitae finibus ligula, nec gravida velit. Duis mattis scelerisque libero, id porta velit efficitur vel.\n <h1>Holiii</h1> Maecenas tincidunt arcu sed pharetra vulputate. Proin turpis dui, pretium id lectus in, mollis commodo nulla. Nulla facilisi. Sed viverra varius auctor. Pellentesque eu felis enim. Maecenas egestas nulla sed pharetra pellentesque. Quisque ultrices, massa eget tempor semper, metus purus scelerisque sem, vel vehicula odio orci non magna. In non lacinia nisi.',
  },
  {
    id: '2',
    author: 'Andre  Chay Sonda',
    description:
      'Cras ante risus, pretium et est quis, gravida congue metus. Nunc sollicitudin enim vitae pellentesque tincidunt.  ',
    imageURL:
      'https://assets.website-files.com/6231c31a6f6b11d3790a8978/63f54854dc6b0b143182a3c1_BlogCover_Build-employee-comm.jpg',
    title: 'Bar',
    publishedOn: 'Thu Feb 23 2023',
    content: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus tellus ut justo maximus, ultrices semper erat porta. Pellentesque interdum pellentesque finibus. Donec sed consectetur orci. Ut nunc tellus, volutpat at blandit non, dignissim at nisi. Nulla nec tortor nec sem lacinia vulputate. Integer nisi turpis, varius a efficitur sit amet, blandit ac orci. Fusce ut nibh luctus, consequat lorem id, auctor dolor. Mauris vitae finibus ligula, nec gravida velit. Duis mattis scelerisque libero, id porta velit efficitur vel.

    Maecenas tincidunt arcu sed pharetra vulputate. Proin turpis dui, pretium id lectus in, mollis commodo nulla. Nulla facilisi. Sed viverra varius auctor. Pellentesque eu felis enim. Maecenas egestas nulla sed pharetra pellentesque. Quisque ultrices, massa eget tempor semper, metus purus scelerisque sem, vel vehicula odio orci non magna. In non lacinia nisi.
    Donec sed molestie diam. Cras quis lectus tellus. Duis scelerisque quis ipsum ac ornare. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam ultricies efficitur ultrices. Fusce elementum, sapien id tempor dignissim, urna mauris vestibulum ex, vel tristique enim magna at velit. Donec vestibulum augue sed tortor mattis, ac laoreet augue iaculis.

Pellentesque aliquam justo nec vehicula tincidunt. Nulla cursus felis nec aliquet accumsan. Donec hendrerit arcu vel lectus sagittis rhoncus. Nullam sit amet nisl egestas, iaculis sapien a, finibus massa. Maecenas ut varius neque, eu facilisis neque. Mauris bibendum fringilla tortor at porttitor. Integer gravida dolor a consectetur iaculis. Sed dapibus ut risus vel varius. Ut velit lorem, vehicula quis risus quis, maximus sagittis eros.

Aliquam erat volutpat. Donec eleifend, dui vel finibus blandit, nulla urna tincidunt libero, nec finibus nulla arcu in turpis. Cras hendrerit aliquet massa, non vulputate orci venenatis sit amet. Sed at commodo erat. Sed ac urna urna. Fusce tincidunt vel sem a commodo. Phasellus dictum tortor et turpis tristique, eget ultricies nibh vehicula. Suspendisse fringilla, enim a egestas tempus, turpis dolor mollis diam, ut egestas nisi tortor eu enim. Cras facilisis dui sed neque fringilla, eget semper ligula vulputate. Pellentesque id est molestie, cursus tortor in, vestibulum neque. Vivamus ac leo bibendum, commodo est in, laoreet neque. Aliquam interdum erat maximus tellus accumsan tincidunt.

    `,
  },
];
