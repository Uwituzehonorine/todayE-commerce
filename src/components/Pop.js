import React from 'react'

 function Pop() {
    return (
        <div className='pop'>
            <h1 className='h1'>addNew</h1>
            <div className='feed'>
                <form>
                    <div>
                        <input placeholder='Name' name='name'/>
                    </div>
                    <div>
                        <input placeholder='price' name='price'/>
                    </div>
                    <div>
                        <input placeholder='description' name='desc'/>
                    </div>
                    <button>submit</button>
                </form>
            </div>
        </div>
    );
}

export default Pop;