export default function ViewTechAppointmentModal() {
  return (
    <div className="modal fade" id="viewTechAppointment" tabindex="-1">
      <div className="modal-dialog" role="document">
        <div className="modal-content bg-dark">
          <div className="modal-header">
            <div className="modal-title">
              <h5>Appointments</h5>
            </div>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <table class="table table-primary">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Date</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="table-info">
                  <th scope="row">Active</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
