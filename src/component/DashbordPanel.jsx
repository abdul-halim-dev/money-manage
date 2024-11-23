import React from 'react'
import { FaChartSimple, FaChevronRight, FaKey, FaMoneyBill, FaMoneyCheck, FaRightFromBracket, FaScrewdriverWrench, FaShareFromSquare, FaUsers } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const DashbordPanel = () => {
    return (
        <div className='w-[95%] sm:w-[90%] bg-primary flex items-center justify-center   flex-col gap-4'>
            <div className='w-full '>
                <Link to={'/balanceTransfer'} className=' w-full bg-secondary h-full flex items-center rounded-tr-xl rounded-tl-xl   justify-between p-3'>
                    <div className='flex items-center justify-center gap-4'>
                        <div className='w-[40px] h-[40px] bg-active flex items-center justify-center rounded-full text-secondary'>
                            <FaChevronRight className='text-lg' />
                        </div>
                        <span className=' text-[18px] font-semibold '> Balance Transfer </span>
                    </div>
                    <span className='text-lg font-bold '>
                        <FaChevronRight />
                    </span>
                </Link>

                <Link to={'/AccountInfo'} className=' w-full bg-secondary h-full flex items-center justify-between p-3'>
                    <div className='flex items-center justify-center gap-4'>
                        <div className='w-[40px] h-[40px] bg-active flex items-center justify-center rounded-full text-secondary'>
                            <FaScrewdriverWrench className='text-lg' />
                        </div>
                        <span className=' text-[18px] font-semibold '> Account Info </span>
                    </div>

                    <span className='text-lg font-bold '>
                        <FaChevronRight />
                    </span>
                </Link>

                <Link to={'/changePassword'} className=' w-full bg-secondary rounded-bl-xl rounded-br-xl  h-full flex items-center justify-between p-3'>
                    <div className='flex items-center justify-center gap-4'>
                        <div className='w-[40px] h-[40px] bg-active flex items-center justify-center rounded-full text-secondary'>
                            <FaKey className='text-lg' />
                        </div>
                        <span className=' text-[18px] font-semibold '> Change Password </span>
                    </div>
                    <span className='text-lg font-bold '>
                        <FaChevronRight />
                    </span>
                </Link>
            </div>
            <div className='w-full '>
                <Link to={'/commission'} className=' w-full bg-secondary h-full flex items-center rounded-tr-xl rounded-tl-xl   justify-between p-3'>
                    <div className='flex items-center justify-center gap-4'>
                        <div className='w-[40px] h-[40px] bg-active flex items-center justify-center rounded-full text-secondary'>
                            <FaChartSimple className='text-lg' />
                        </div>
                        <span className=' text-[18px] font-semibold '> Commissions </span>
                    </div>
                    <span className='text-lg font-bold '>
                        <FaChevronRight />
                    </span>
                </Link>
                <Link to={'/depositHistory'} className=' w-full bg-secondary h-full flex items-center justify-between p-3'>
                    <div className='flex items-center justify-center gap-4'>
                        <div className='w-[40px] h-[40px] bg-active flex items-center justify-center rounded-full text-secondary'>
                            <FaMoneyCheck className='text-lg' />
                        </div>
                        <span className=' text-[18px] font-semibold '> Deposit History </span>
                    </div>
                    <span className='text-lg font-bold '>
                        <FaChevronRight />
                    </span>
                </Link>

                <Link to={'/withdrawHistory'} className=' w-full bg-secondary h-full flex items-center justify-between p-3'>
                    <div className='flex items-center justify-center gap-4'>
                        <div className='w-[40px] h-[40px] bg-active flex items-center justify-center rounded-full text-secondary'>
                            <FaMoneyBill className='text-lg' />
                        </div>
                        <span className=' text-[18px] font-semibold '> Withdraw History </span>
                    </div>
                    <span className='text-lg font-bold '>
                        <FaChevronRight />
                    </span>
                </Link>

                <Link to={'/myTeam'} className=' w-full bg-secondary rounded-bl-xl rounded-br-xl  h-full flex items-center justify-between p-3'>
                    <div className='flex items-center justify-center gap-4'>
                        <div className='w-[40px] h-[40px] bg-active flex items-center justify-center rounded-full text-secondary'>
                            <FaShareFromSquare className='text-lg' />
                        </div>
                        <span className=' text-[18px] font-semibold '> Refer Link </span>
                    </div>

                    <span className='text-lg font-bold '>
                        <FaChevronRight />
                    </span>
                </Link>

                <Link to={'/myTeam'} className=' w-full bg-secondary rounded-bl-xl rounded-br-xl  h-full flex items-center justify-between p-3'>
                    <div className='flex items-center justify-center gap-4'>
                        <div className='w-[40px] h-[40px] bg-active flex items-center justify-center rounded-full text-secondary'>
                            <FaUsers className='text-lg' />
                        </div>
                        <span className=' text-[18px] font-semibold '> My Team </span>
                    </div>
                    <span className='text-lg font-bold '>
                        <FaChevronRight />
                    </span>
                </Link>
            </div>
            <div className='w-full '>
                <Link to={'/twoFactor'} className=' w-full bg-secondary h-full flex items-center rounded-tr-xl rounded-tl-xl   justify-between p-3'>
                    <div className='flex items-center justify-center gap-4'>
                        <div className='w-[40px] h-[40px] bg-active flex items-center justify-center rounded-full text-secondary'>
                            <FaKey className='text-lg' />
                        </div>
                        <span className=' text-[18px] font-semibold '> Two Factor </span>
                    </div>

                    <span className='text-lg font-bold '>
                        <FaChevronRight />
                    </span>
                </Link>
                <Link to={'/'} className=' w-full bg-secondary rounded-bl-xl rounded-br-xl  h-full flex items-center justify-between p-3'>
                    <div className='flex items-center justify-center gap-4'>
                        <div className='w-[40px] h-[40px] bg-active flex items-center justify-center rounded-full text-secondary'>
                            <FaRightFromBracket className='text-lg' />
                        </div>
                        <span className=' text-[18px] font-semibold '> Log Out </span>
                    </div>
                    <span className='text-lg font-bold '>
                        <FaChevronRight />
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default DashbordPanel