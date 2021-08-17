import "./Pagination.css";

export default function Pagination({ postPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <div className="paginationContainer">
        <ul className="pagination">
          {pageNumbers.map((p) => {
            return (
              <li key={p} className="pagination_PageLink">
                <button onClick={() => paginate(p)}>{p}</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
