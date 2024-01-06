import { useRef } from 'react';
import { Tab } from '@headlessui/react';
import { projects } from '../constants';


const TestCase = () => {

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    const handleDownload = (e) => {
        e.target.parentElement.previousElementSibling.click();
    };

    const handleCopy = (e) => {
        navigator.clipboard.writeText(e.target.parentElement.previousElementSibling.innerText)
        alert('Text successfully copied to clipboard')
    };

    return (
        <div className='py-14 relative z-[10] w-full px-8 lg:px-24 flex flex-col text-white items-center min-h-[700px]'>
            <h2 className='text-white text-3xl w-full text-center sm:text-4xl lg:text-6xl font-bold'>
                Project Test Cases
            </h2>
            <div className='w-full sm:w-[500px] my-10'>
                <Tab.Group>
                    <Tab.List className="flex w-full gap-3 rounded-xl bg-white text-black p-1">
                        {projects.map((pr, i) => (
                            <Tab
                                key={i}
                                className={({ selected }) =>
                                    classNames(
                                        'flex-1 rounded-lg py-2.5 text-sm font-medium leading-5',
                                        'ring-0 outline-none text-[18px]',
                                        selected
                                            ? 'text-white bg-[#272729]'
                                            : ' text-[#272729] hover:bg-white'
                                    )
                                }
                            >
                                {pr.title}
                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels className="mt-2">
                        {projects.map((pr, i) => (
                            <Tab.Panel key={i}>
                                <ul className='rounded-[12px] p-5 flex flex-col gap-2 bg-[#272729]'>
                                    {pr.cases.map((cases, index) => (
                                        <li
                                            className='flex gap-2 py-3 items-center border-b'
                                            key={cases.id}
                                        >
                                            {(i === 0 || i === 1) && (
                                                <>
                                                    <h3>{cases.id}. </h3>
                                                    <span>{cases.title}</span>
                                                </>
                                            )}
                                            {i === 2 && (
                                                <a href="./src/data/ss.zip">{cases.title}</a>
                                            )}
                                            {(i === 0 || i === 1) && (
                                                <div className='flex flex-1 justify-end'>
                                                    <button
                                                        onClick={(e) => handleCopy(e)}
                                                        className='bg-white text-[#2a2a33] p-2 rounded-[25px] px-5 font-bold h-[40px] flex justify-center items-center'>
                                                        Copy
                                                    </button>
                                                </div>
                                            )}
                                            {i === 2 && (
                                                <div className='flex flex-1 justify-end'>
                                                    <button
                                                        onClick={handleDownload}
                                                        className='bg-white text-[#2a2a33] p-2 rounded-[25px] px-5 font-bold h-[40px] flex justify-center items-center'>
                                                        Download
                                                    </button>
                                                </div>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </div>
    );
};

export default TestCase;
