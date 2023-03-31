import React from 'react'

const SelectedPermissionItem = (props) => {
  return (
    <div className='selected-permissions-item'>
        <p>{props.content}</p>
        <div className='selected-permissions-item__remove'>
            <button type='button'>
                <i class="fa-solid fa-x"></i>
            </button>
        </div>
    </div>
  )
}

export default SelectedPermissionItem