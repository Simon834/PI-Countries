export default function Pagination({ postPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <div className="paginationContainer">
        <ul>
          {pageNumbers.map((p) => {
            return (
              <li key={p}>
                <button onClick={() => paginate(p)}>{p}</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
