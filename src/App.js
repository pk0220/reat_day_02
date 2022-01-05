export default function App() {
  let list = [1, 1, 2, 3, 4,5,6,7];
  return (
    <div className="container-fluid ">
      <Header />
      <div className="row">
        {list.map(() => (
          <div className="col-sm-6 col-lg-3">
            <Mycard />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Header() {
  return (
    <div className="row bg-dark sticky-top text-light p-2 mb-1">
      <div className="col">React App</div>
    </div>
  );
}

export function Mycard() {
  let cardTitle = "Card Title";
  return (
    <div className="card my-2">
      <div className="card-header bg-info">{cardTitle}</div>
      <div className="card-body mx-1">
        {" "}
        <img className="my-2" src="https://picsum.photos/200" alt="" />
        <input
          className="bg-primary-1 btn-sm bg-primary p-2 w-100"
          type="button"
          value="BUY NOW"
        />
      </div>
    </div>
  );
}
