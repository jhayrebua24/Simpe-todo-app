import React from 'react';
import PropTypes from 'prop-types';

import { StyledUl, StyledLi } from './styled/List';


const TodoList = ({ items, onItemClick, ...props }) => {
  return (
    <StyledUl>
      {items.map(item => (
        <StyledLi
          onClick={e => onItemClick(item, e)}
          // onClick={e => !item.done ? onItemClick(item, e) : null} //2nd opt
          key={item.id}
          style={{ textDecoration: item.done ? 'line-through' : 'none' }}
        >
          {item.text}
        </StyledLi>
      ))}
    </StyledUl>
  )
}

TodoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onItemClick: PropTypes.func.isRequired,
}
export default TodoList;
