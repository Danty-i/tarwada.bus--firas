import React from "react";
import { Link } from "react-router-dom";
// import './styles.css';


const NewTicket = () => {
  return (
    <div>
      <>
        <nav>
          <ul>
            <li>
              <Link to="/user-dashboard">الرئيسية</Link>
            </li>
            <li>
              <Link to="/reservations">حجوزاتي</Link>
            </li>
            <li>
              <a href="#">مساعدة وتعليمات</a>
            </li>
          </ul>
        </nav>

        <div className="background" />
        <div className="overlay" />
        <div className="container">
          <div className="progress-bar">
            <div className="step active" data-step={1}>
              1. اختيار الرحلة
            </div>
            <div className="step" data-step={2}>
              2. الحجز المؤقت
            </div>
            <div className="step" data-step={3}>
              3. تأكيد الحجز
            </div>
          </div>
          <div className="form-container">
            <form id="bookingForm">
              <div className="page active" id="page-1">
                <h2>اختيار الرحلة</h2>
                <div className="form-group">
                  <label htmlFor="departure">اختر محطة الانطلاق</label>
                  <select id="departure" name="departure" required="">
                    <option value="" disabled="" selected="">
                      اختر محطة الانطلاق
                    </option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="destination">اختر محطة الوجهة</label>
                  <select id="destination" name="destination" required="">
                    <option value="" disabled="" selected="">
                      اختر محطة الوجهة
                    </option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="date">اختر تاريخ الرحلة</label>
                  <select id="date" name="date" required="">
                    <option value="" disabled="" selected="">
                      اختر تاريخ الرحلة
                    </option>
                  </select>
                </div>
                <button type="button" onclick="nextPage()">
                  الخطوة التالية
                </button>
              </div>
              <div className="page" id="page-2">
                <h2>الحجز المؤقت</h2>
                <div className="form-group">
                  <label htmlFor="name">اسم المسافر</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="أدخل اسمك الكامل"
                    required=""
                    readOnly=""
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="national-id">ادخل الرقم الوطني</label>
                  <input
                    type="text"
                    id="national-id"
                    name="national-id"
                    required=""
                    readOnly=""
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="trip">اختر توقيت الرحلة المتاحة</label>
                  <select id="trip" name="trip" required="">
                    <option value="" disabled="" selected="">
                      اختر توقيت الرحلة المتاحة
                    </option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="seats">عدد المقاعد</label>
                  <input
                    type="number"
                    id="seats"
                    name="seats"
                    min={1}
                    max={10}
                    required=""
                  />
                </div>
                <button type="button" onclick="prevPage()">
                  الخطوة السابقة
                </button>
                <button type="button" onclick="nextPage()">
                  الخطوة التالية
                </button>
              </div>
              <div className="page" id="page-3">
                <h2>تأكيد الحجز</h2>
                <p>هل أنت متأكد من معلومات الحجز؟</p>
                <div className="table-container">
                  <table>
                    <tbody>
                      <tr>
                        <th>الاسم</th>
                        <td id="confirmation-name" />
                      </tr>
                      <tr>
                        <th>محطة الانطلاق</th>
                        <td id="confirmation-departure" />
                      </tr>
                      <tr>
                        <th>محطة الوجهة</th>
                        <td id="confirmation-destination" />
                      </tr>
                      <tr>
                        <th>تاريخ الرحلة</th>
                        <td id="confirmation-date" />
                      </tr>
                      <tr>
                        <th>توقيت الرحلة</th>
                        <td id="confirmation-trip" />
                      </tr>
                      <tr>
                        <th>الرقم الوطني</th>
                        <td id="confirmation-national-id" />
                      </tr>
                      <tr>
                        <th>عدد المقاعد</th>
                        <td id="confirmation-seats" />
                      </tr>
                    </tbody>
                  </table>
                </div>
                <button type="button" onclick="prevPage()">
                  الخطوة السابقة
                </button>
                <button type="submit">تأكيد</button>
              </div>
            </form>
          </div>
        </div>
      </>
    </div>
  );
};

export default NewTicket;
