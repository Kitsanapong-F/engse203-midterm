import { useState } from 'react';
function RequestForm({ onAddRequest }) {
  const [requesterName, setRequesterName] = useState('');
  const [requestType, setRequestType] = useState('');
  const [location, setLocation] = useState('');
  const [details, setDetails] = useState('');
  const [priority, setPriority] = useState('normal');
  const [errors, setErrors] = useState({});
  function validateTask() {
    const errors = {};

    if (requesterName.trim().length < 2) {
      errors.requesterName = 'ชื่องานต้องมีอย่างน้อย 2 ตัวอักษร';
    }

    if (!requestType) {
      errors.requestType = 'กรุณาเลือกประเภทคำร้อง';
    }

    if (location.trim != " ") {
      errors.location = 'กรุณากรอกชื่อสถานที่่'
    }

    if (details.trim < 10) {
      errors.details = 'รายละเอียดต้องมีอย่างน้อย 2 ตัวอักษร'
    }

    if (priority = " ") {
      errors.priority = 'กรุณาเลือกประเภทความสำคัญ'
    }
    return errors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO LAB4-R05–R07: validate controlled state แล้วเรียก onAddRequest
    const errors = validateTask();
    if(Object.keys(errors).length > 0){
      setErrors(validateTask);
      return;
    }
    setErrors({});

    const newRequest ={
      requesterName: requesterName,
      requestType: requestType,
      location: location,
      details: details,
      priority:priority,
      status: 'pending',
    };
    onAddRequest(newRequest);
  }



  return (
    <section className="panel" aria-labelledby="request-form-title">
      <p className="eyebrow dark">CONTROLLED FORM</p>
      <h2 id="request-form-title">สร้างคำร้องใหม่</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="field">
          <label htmlFor="requesterName">ชื่อผู้แจ้ง</label>
          <input id="requesterName" name="requesterName" value={requesterName} onChange={(e) => setRequesterName(e.target.value)} />
          <small className="error" id="requesterName-error">{errors.requesterName}</small>
        </div>

        <div className="field">
          <label htmlFor="requestType">ประเภทคำร้อง</label>
          <select id="requestType" name="requestType" defaultValue="" value={requestType} onChange={(e) => setRequestType(e.target.value)}>
            <option value="">-- เลือกประเภท --</option>
            <option value="แจ้งซ่อม">แจ้งซ่อม</option>
            <option value="ขอใช้ห้อง">ขอใช้ห้อง</option>
            <option value="บริการบัญชีผู้ใช้">บริการบัญชีผู้ใช้</option>
          </select>
          <small className="error" id="requestType-error">{errors.requestType}</small>
        </div>

        <div className="field">
          <label htmlFor="location">สถานที่</label>
          <input id="location" name="location" value={location} onChange={(e) => setLocation(e.target.value)} />
          <small className="error" id="location-error">{errors.location}</small>
        </div>

        <div className="field">
          <label htmlFor="details">รายละเอียด</label>
          <textarea id="details" name="details" rows="4" value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
          <small className="error" id="details-error">{errors.details}</small>
        </div>

        <fieldset className="field">
          <legend>ความเร่งด่วน</legend>
          <label><input type="radio" name="priority" value="normal" checked={priority === 'normal'} onChange={(e) => setPriority(e.target.value)} /> ปกติ</label>
          <label><input type="radio" name="priority" value="urgent" checked={priority === 'urgent'} onChange={(e) => setPriority(e.target.value)} /> เร่งด่วน</label>
          <small className="error" id="priority-error">{errors.priority}</small>
        </fieldset>

        <button type="submit">เพิ่มคำร้อง</button>
        <p className="status" role="status">TODO: feedback</p>
      </form>
    </section>
  );
}

export default RequestForm;

