import "./Pagination.css";

export default function Pagination({ postPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <div>
        {pageNumbers.map((p) => (
          <button onClick={() => paginate(p)}>{p}</button>
        ))}
      </div>
    </nav>
  );
}
