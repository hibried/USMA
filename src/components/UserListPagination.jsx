import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserListPagination = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = props.itemsPerPage;

  // Calculate indexes
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = props.data.slice(firstItemIndex, lastItemIndex);

  const totalPages = Math.ceil(props.data.length / itemsPerPage);

  // Change page
  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="flex flex-col bg-[rgba(255,255,255,0.21)] rounded-2xl p-2">
      <div className="grid gap-2">
        {currentItems.map((user, index) => (
          <Link to={`/user-detail/${user.id}`}>
            <div key={index} className="flex items-center gap-5 p-5 bg-[rgba(0,0,0,0.6)] rounded-xl shadow-lg">
                <img src={user.avatar} className="rounded-full w-20" alt="" />
                <div>
                    <h3 className="font-bold">{user.first_name} {user.last_name}</h3>
                    <p>{user.email}</p>
                </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="join self-center mt-2 flex gap-2">
        <button className="join-item btn rounded-l-xl border-none" onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
          «
        </button>
        
        <div className="join-item dropdown dropdown-bottom dropdown-center p-0">
            <div tabIndex={0} role="button" className="btn rounded-none border-none">Page {currentPage}</div>
            <ul tabIndex={0} className="dropdown-content menu backdrop-blur-sm bg-base-300/75 rounded-box z-1 w-52 p-2 mt-1 shadow-lg">
                {[...Array(totalPages)].map((_, i) => (
                    <li key={i}><a onClick={() => {document.activeElement.blur(); goToPage(i + 1);}}>Page {i + 1}</a></li>
                ))}
            </ul>
        </div>
        
        <button className="join-item btn rounded-r-xl border-none" onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
          »
        </button>
      </div>
    </div>
  );
};

export default UserListPagination;