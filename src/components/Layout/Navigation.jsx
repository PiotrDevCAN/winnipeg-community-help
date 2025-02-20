import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="h-screen w-64 bg-gray-900 text-gray-200 fixed flex flex-col">
            <div className="text-xl font-bold p-6 border-b border-gray-700">Menu</div>
            <nav className="flex-1">
                <ul className="space-y-4 p-6">
                    <li>
                        <Link to="/" className="block p-2 rounded hover:bg-gray-700">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/task" className="block p-2 rounded hover:bg-gray-700">
                            Add task
                        </Link>
                    </li>
                    <li>
                        <Link to="/tasks" className="block p-2 rounded hover:bg-gray-700">
                            Tasks
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="block p-2 rounded hover:bg-gray-700">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="block p-2 rounded hover:bg-gray-700">
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;
