import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <div className="area" style={{ backgroundImage: 'url(/background.jpg)', overflow: 'hidden' }}>
            <div className="container py-4 header-content">
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className='title'>
                            WHAT IS <span className="fareza-text"> FAREZA</span>
                        </h1>
                        <p className="text">
                            Development Innovative Solutions. The Only Way To Do Great Things Is To Love What You Do
                        </p>
                        <div className="box-buttons pt-4">
                            <Link href={`/`}>
                                <a className='btn butt-lg butt-white me-3'>
                                    Contact Us Now
                                </a>
                            </Link>
                            <Link href={`/`}>
                                <a className='btn butt-lg butt-white-out'>
                                    Contact Us Now
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="inner-header">
                            <div className="terminal">
                                <div className="phone-img">
                                    <img width={490} src="/huawei-nova-android-phone-huawei-australia-165646.png" alt="" />
                                </div>
                                <div className="terminal__task-bar">
                                    <span className="terminal__circle terminal__circle--red me-2"></span>
                                    <span className="terminal__circle terminal__circle--yellow me-2"></span>
                                    <span className="terminal__circle terminal__circle--green me-2"></span>
                                </div>
                                <div className="terminal__window">
                                    <div className="terminal__window_content">
                                        <p className="terminal__prompt">$ <span className="terminal__prompt--typing">
                                            <span className="cover cover--gimme-dev">
                                            </span>gimme frontend dev</span>
                                        </p>
                                        <p className="terminal__prompt terminal__prompt--checkout">checkout Tobias Weiß:
                                            <span className="terminal__window--highlight">
                                                <a href="https://github.com/vice2000" target="_blank">https://github.com/vice2000</a>
                                            </span>
                                        </p><p className="terminal__prompt terminal__prompt--show-contact">$
                                            <span className="terminal__prompt--typing">
                                                <span className="cover cover--show-contact">
                                                </span>show direct contact</span>
                                        </p>
                                        <p className="terminal__prompt terminal__prompt--mail">mail:
                                            <span className="terminal__window--highlight">
                                                <a href="mailto:sayhi@tobias-weiss.info">sayhi@tobias-weiss.info</a>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div >
    )
}
