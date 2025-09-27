import styles from './css/Item.module.css';

const Items = (props) => {
  return (
    <li  className={`${styles.listGroupItem} list-group-item`}>
       {props.foodItems}
    </li>
  );
};

export default Items;
  