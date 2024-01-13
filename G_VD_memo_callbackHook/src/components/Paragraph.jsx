import React, { useMemo } from 'react'

const Paragraph = (props) => {
  const {list:list} = props;

  const localList = useMemo(() => {
    console.log("in memo function");
    console.log();
    return props.list
  },[list])

  console.log("paragraph component");
  return (
    <div>
        {/* {props.show && <p>This is simple paragraph show conditionally.</p>}  */}
        {/* <p>{props.show?'This is simple paragraph show conditionally':''}</p> */}

        <p>{props.show ? props.list.map(item => item) : ''}</p>
    </div>
  )
}

export default React.memo(Paragraph);

// export default Paragraph;