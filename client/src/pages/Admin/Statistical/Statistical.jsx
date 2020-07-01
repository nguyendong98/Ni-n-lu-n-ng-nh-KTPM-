import React, {useEffect, useState} from 'react';
import { Pie, Line, Bar } from "react-chartjs-2";
import PropTypes from 'prop-types';
import './../CustomerManage/CustomerManage.scss'
import './Statistical.scss'
import {Link} from "react-router-dom";
import { connect } from 'react-redux'
import { statisticalNationality } from "../../../actions/statistical";
import { statisticalNationalityDetail } from "../../../actions/statistical";
import { statisticalRevenue } from "../../../actions/statistical";
import Spinner from "../../../components/Spinner/Spinner";



const Statistical = ({ statisticalNationality, statisticalRevenue, statistical: {nationality, nationality_detail, revenue}, statisticalNationalityDetail }) => {
    useEffect(() => {
        statisticalNationality()
    },[statisticalNationality])
    const [category, setCategory] = useState('1')
    const [year, setYear] = useState('0')
    // console.log(nationality_detail)
    const  onChangeYear = e => {
        setYear(e.target.value)
        if(e.target.value !== '0') {
            statisticalNationalityDetail(e.target.value)
            statisticalRevenue(e.target.value)
        }
        // console.log(year)
    }
    const onChangeCategory = e => {
        setCategory(e.target.value)
        if(year !== '0') {
            statisticalRevenue(year)
        }


    }
    const barChartRevenue = (
        revenue ? (
            <Bar
                data={{
                    labels: ['Junuary', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    datasets: [{
                        label: 'January',
                        backgroundColor: [
                            'rgba(0, 0, 255, 0.5)',
                            'rgba(0, 255, 0, 0.5)',
                            'rgba(255, 0, 0, 0.5)',
                        ],

                        data:  [revenue[0].value, revenue[1].value, revenue[2].value, revenue[3].value, revenue[4].value, revenue[5].value,
                            revenue[6].value, revenue[7].value, revenue[8].value, revenue[9].value, revenue[10].value]
                    }]
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Biểu đồ thống kê doanh thu năm ${year}`}
                }}
            />)  : null
    )
    const lineChart = nationality_detail ? (
        <Line
            data={{
                labels: nationality_detail.map(val => val.month),
                datasets: [{
                    data: nationality_detail.map(val => val.vietnamese),
                    label: 'vietnamese',
                    borderColor: '#7BC5AE',
                    fill: true
                }, {
                    data: nationality_detail.map(val => val.england),
                    label: 'england',
                    borderColor: '#85B8CC',
                    // backgroundColor: '#85B8CC',
                    fill: true
                }, {
                    data: nationality_detail.map(val => val.france),
                    label: 'france',
                    borderColor: '#FE7773',
                    // backgroundColor: '#FE7773',
                    fill: true
                }, {
                    data: nationality_detail.map(val => val.american),
                    label: 'american',
                    borderColor: '#E5BB4B',
                    // backgroundColor: '#E5BB4B',
                    fill: true
                }],
            }}
            options={{
                legend: { display: true },
                title: { display: true, text: `Biểu đồ thống kê khách cư trú năm ${year}`}
            }}

        />
    ) : null
    const pieChart =  nationality ? (
        <Pie
            data={{
                labels: nationality.nationality,
                datasets: [{
                    data: nationality.mainData,
                    backgroundColor: ['#7BC5AE', '#85B8CC', '#FE7773', '#E5BB4B']
                }]
            }}
            options={{
                legend: { display: true },
                title: { display: true, text: `Biểu đồ thống kê tổng lượng khách cư trú`}
            }}
        />
    ) : null

    const showYear = () => {
        let yearNow = new Date().getFullYear()
        let listYear = []
        for(let i = yearNow; i >= yearNow - 5; i--) {
            listYear.push(i)
        }
         return listYear.map((val, i) => {
               return <option key={i} value={val}>{val}</option>


        })

    }
    console.log(year)
    console.log(category)
    return !nationality ? <Spinner /> :(
        <section className='customermnm'>
            <h2 className='customermnm__title animate__animated animate__flip'>Statistical</h2>
            <div className='customermnm__menu'>
                <span>
                  <Link to='/admin' exact='true' style={{ color: 'black' }}>
                    Admin
                  </Link>
                </span>
                <i className='fa fa-chevron-right'></i>
                <span className='customermnm__menu-home'>Statistical</span>
            </div>
            <div className="selectOption container">
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <h3>Select category statistical</h3>
                        <select className="form-control font-secondary" value={category} onChange={e => onChangeCategory(e)}>
                            <option value="1">Statistical Nationality</option>
                            <option value="2">Statistical Revenue</option>
                        </select>
                    </div>
                    <div className="col-lg-3 col-12">
                        <h3>Select Year</h3>
                        <select className="form-control font-secondary" value={year} onChange={e => onChangeYear(e)}>
                            <option value='0'></option>
                            {showYear()}
                        </select>
                    </div>

                </div>
            </div>

            <div style={{ margin: '5rem auto'}} className="container text-center font-weight-bold">
                { category === '1' ? (year !== '0'  ? lineChart : pieChart) : (year !== '0' ? barChartRevenue : 'You must choose year to statistic') }
            </div>
            {/*<div className="container">*/}
            {/*    { year !== '0' && category === "2" ?  barChartRevenue : ''}*/}
            {/*</div>*/}
        </section>
    )
}
Statistical.propTypes = {
    statistical: PropTypes.object.isRequired,
    statisticalNationality: PropTypes.func.isRequired
};
const mapStateToProps = (state) => {
    return {
        statistical: state.statistical
    };
};
export default connect(mapStateToProps, { statisticalNationality, statisticalNationalityDetail, statisticalRevenue })(Statistical)
