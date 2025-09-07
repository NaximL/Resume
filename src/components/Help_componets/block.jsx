
const Block = ({ children, id, style }) => (
  <div className='block vis' style={style} id={id}>{children}</div>
);

export default Block;