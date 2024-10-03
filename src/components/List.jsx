import React from 'react';

export default function List() {
    return (
        <div id="container">
            <div id="header-bar">LIST OF FARMS</div>
            <div id="contents">
                <div class="farm">
                    <div>
                        <img src="/image.png" alt="Farm Picture" />
                    </div>
                    <div><b>FARM 01</b></div>
                    <div><p>decription here decription here decription here</p></div>
                    <div class="icon">
                    <svg 
                        fill="red" 
                        width="32px" 
                        height="32px" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg">
                            <path d="M15,16a3,3,0,1,1-4-2.816V5a1,1,0,0,1,2,0v8.184A2.99,2.99,0,0,1,15,16ZM16,5v5.262A7,7,0,0,1,11.984,23a7.194,7.194,0,0,1-.827-.049,7.067,7.067,0,0,1-6.07-5.835A6.986,6.986,0,0,1,8,10.261V5a4,4,0,0,1,8,0Zm-1.5,6.675a1,1,0,0,1-.5-.865V5a2,2,0,0,0-4,0v5.81a1,1,0,0,1-.5.865,5,5,0,1,0,5,0Z"/>
                    </svg>
                    <p>29.5</p>
                    </div>
                    <div>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        height="32px" 
                        viewBox="0 -960 960 960" 
                        width="32px" fill="blue">
                            <path d="M80-240v-80q38 0 56.5-20t77.5-20q59 0 77.5 20t54.5 20q38 0 56.5-20t77.5-20q57 0 77.5 20t56.5 20q38 0 55.5-20t76.5-20q59 0 77.5 20t56.5 20v80q-57 0-77.5-20T746-280q-36 0-54.5 20T614-240q-57 0-77.5-20T480-280q-38 0-56.5 20T346-240q-59 0-76.5-20T214-280q-38 0-56.5 20T80-240Zm0-160v-80q38 0 56.5-20t77.5-20q57 0 76.5 20t55.5 20q38 0 56.5-20t77.5-20q57 0 77 20t55 20q38 0 56.5-20t77.5-20q57 0 77.5 20t56.5 20v80q-59 0-78.5-20T746-440q-36 0-54.5 20T614-400q-57 0-77.5-20T480-440q-38 0-55.5 20T348-400q-59 0-78.5-20T214-440q-36 0-56.5 20T80-400Zm0-160v-80q38 0 56.5-20t77.5-20q57 0 76.5 20t55.5 20q38 0 56.5-20t77.5-20q57 0 77 20t55 20q38 0 56.5-20t77.5-20q57 0 77.5 20t56.5 20v80q-59 0-78.5-20T746-600q-36 0-54.5 20T614-560q-57 0-77.5-20T480-600q-38 0-55.5 20T348-560q-59 0-78.5-20T214-600q-36 0-56.5 20T80-560Z"/>
                        </svg>
                    </div>
                    <div><button>Details</button></div>
                </div>
                <div class="farm">
                    <div>
                        <img src="/image.png" alt="Farm Picture" />
                    </div>
                    <div><b>FARM 02</b></div>
                    <div><p>decription here decription here decription here</p></div>
                    <div class="icon">
                    <svg 
                        fill="red" 
                        width="32px" 
                        height="32px" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg">
                            <path d="M15,16a3,3,0,1,1-4-2.816V5a1,1,0,0,1,2,0v8.184A2.99,2.99,0,0,1,15,16ZM16,5v5.262A7,7,0,0,1,11.984,23a7.194,7.194,0,0,1-.827-.049,7.067,7.067,0,0,1-6.07-5.835A6.986,6.986,0,0,1,8,10.261V5a4,4,0,0,1,8,0Zm-1.5,6.675a1,1,0,0,1-.5-.865V5a2,2,0,0,0-4,0v5.81a1,1,0,0,1-.5.865,5,5,0,1,0,5,0Z"/></svg>
                    <p>29.5</p>
                    </div>
                    <div>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        height="32px" 
                        viewBox="0 -960 960 960" 
                        width="32px" fill="blue">
                            <path d="M80-240v-80q38 0 56.5-20t77.5-20q59 0 77.5 20t54.5 20q38 0 56.5-20t77.5-20q57 0 77.5 20t56.5 20q38 0 55.5-20t76.5-20q59 0 77.5 20t56.5 20v80q-57 0-77.5-20T746-280q-36 0-54.5 20T614-240q-57 0-77.5-20T480-280q-38 0-56.5 20T346-240q-59 0-76.5-20T214-280q-38 0-56.5 20T80-240Zm0-160v-80q38 0 56.5-20t77.5-20q57 0 76.5 20t55.5 20q38 0 56.5-20t77.5-20q57 0 77 20t55 20q38 0 56.5-20t77.5-20q57 0 77.5 20t56.5 20v80q-59 0-78.5-20T746-440q-36 0-54.5 20T614-400q-57 0-77.5-20T480-440q-38 0-55.5 20T348-400q-59 0-78.5-20T214-440q-36 0-56.5 20T80-400Zm0-160v-80q38 0 56.5-20t77.5-20q57 0 76.5 20t55.5 20q38 0 56.5-20t77.5-20q57 0 77 20t55 20q38 0 56.5-20t77.5-20q57 0 77.5 20t56.5 20v80q-59 0-78.5-20T746-600q-36 0-54.5 20T614-560q-57 0-77.5-20T480-600q-38 0-55.5 20T348-560q-59 0-78.5-20T214-600q-36 0-56.5 20T80-560Z"/>
                        </svg>
                    </div>
                    <div><button>Details</button></div>
                </div>
                <div class="farm">
                    <div>
                        <img src="/image.png" alt="Farm Picture" />
                    </div>
                    <div><b>FARM 03</b></div>
                    <div><p>decription here decription here decription here</p></div>
                    <div class="icon">
                    <svg 
                        fill="red" 
                        width="32px" 
                        height="32px" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg">
                            <path d="M15,16a3,3,0,1,1-4-2.816V5a1,1,0,0,1,2,0v8.184A2.99,2.99,0,0,1,15,16ZM16,5v5.262A7,7,0,0,1,11.984,23a7.194,7.194,0,0,1-.827-.049,7.067,7.067,0,0,1-6.07-5.835A6.986,6.986,0,0,1,8,10.261V5a4,4,0,0,1,8,0Zm-1.5,6.675a1,1,0,0,1-.5-.865V5a2,2,0,0,0-4,0v5.81a1,1,0,0,1-.5.865,5,5,0,1,0,5,0Z"/></svg>
                    <p>29.5</p>
                    </div>
                    <div>
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        height="32px" 
                        viewBox="0 -960 960 960" 
                        width="32px" fill="blue">
                            <path d="M80-240v-80q38 0 56.5-20t77.5-20q59 0 77.5 20t54.5 20q38 0 56.5-20t77.5-20q57 0 77.5 20t56.5 20q38 0 55.5-20t76.5-20q59 0 77.5 20t56.5 20v80q-57 0-77.5-20T746-280q-36 0-54.5 20T614-240q-57 0-77.5-20T480-280q-38 0-56.5 20T346-240q-59 0-76.5-20T214-280q-38 0-56.5 20T80-240Zm0-160v-80q38 0 56.5-20t77.5-20q57 0 76.5 20t55.5 20q38 0 56.5-20t77.5-20q57 0 77 20t55 20q38 0 56.5-20t77.5-20q57 0 77.5 20t56.5 20v80q-59 0-78.5-20T746-440q-36 0-54.5 20T614-400q-57 0-77.5-20T480-440q-38 0-55.5 20T348-400q-59 0-78.5-20T214-440q-36 0-56.5 20T80-400Zm0-160v-80q38 0 56.5-20t77.5-20q57 0 76.5 20t55.5 20q38 0 56.5-20t77.5-20q57 0 77 20t55 20q38 0 56.5-20t77.5-20q57 0 77.5 20t56.5 20v80q-59 0-78.5-20T746-600q-36 0-54.5 20T614-560q-57 0-77.5-20T480-600q-38 0-55.5 20T348-560q-59 0-78.5-20T214-600q-36 0-56.5 20T80-560Z"/>
                        </svg>
                    </div>
                    <div><button>Details</button></div>
                </div>
            </div>
        </div>
    );
}