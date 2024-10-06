document.addEventListener("DOMContentLoaded", function() {
  document.querySelector('.blank-profile-container').style.display = 'block';
  hideAllOtherContainers();

  document.querySelectorAll(".user-list-table tbody tr").forEach(row => {
      row.addEventListener("click", function() {
          showUserDetails(row);
      });
  });

  document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function(event) {
        if (this.textContent === 'Edit') {
            event.stopPropagation();

            const selectedRow = this.closest('tr');
            showEditUserDetails(selectedRow);
            
            const dropdownContent = this.closest('.dropdown-content');
            dropdownContent.classList.remove('show');
        }
    });
  });
  
});

function hideAllContainers() {
  document.querySelector('.blank-profile-container').style.display = 'none';
  document.querySelector('.selected-profile-container').style.display = 'none';
  document.querySelector('.edit-profile-container').style.display = 'none';
  document.querySelector('.select-org-user-container').style.display = 'none';
  document.querySelector('.edit-org-user-container').style.display = 'none';
}

function hideAllOtherContainers() {
  document.querySelector('.selected-profile-container').style.display = 'none';
  document.querySelector('.edit-profile-container').style.display = 'none';
  document.querySelector('.select-org-user-container').style.display = 'none';
  document.querySelector('.edit-org-user-container').style.display = 'none';
}

function showUserDetails(row) {
  hideAllContainers();

  const accountType = row.dataset.accounttype;
  
  if (accountType === 'donor' || accountType === 'admin') {
    document.querySelector('.selected-profile-container').style.display = 'block';
    document.getElementById('userId').value = row.dataset.id;
    document.getElementById('accountType').value = accountType;
    document.getElementById('username').value = row.dataset.username;
    document.getElementById('email').value = row.dataset.email;
  } else if (accountType === 'donee organization') {
    document.querySelector('.select-org-user-container').style.display = 'block';
    document.getElementById('OrguserId').value = row.dataset.id;
    document.getElementById('OrgaccountType').value = accountType;
  } 
}

function showEditUserDetails(row) {
  hideAllContainers();

  const accountType = row.dataset.accounttype;

  if (accountType === 'donor' || accountType === 'admin') {
    document.querySelector('.edit-profile-container').style.display = 'block';
    document.getElementById('editUserId').value = row.dataset.id;
    document.getElementById('editAccountType').value = accountType;
    document.getElementById('editUsername').value = row.dataset.username;
    document.getElementById('editEmail').value = row.dataset.email;
  } else if (accountType === 'donee organization') {
    document.querySelector('.edit-org-user-container').style.display = 'block';
    document.getElementById('editOrgId').value = row.dataset.id;
    document.getElementById('editOrgAccountType').value = accountType;
  } 
}
