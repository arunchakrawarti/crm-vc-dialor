import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import React from 'react';

const SendEmailListSearch = () => {
  return (
    <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
      <div className="flex flex-wrap items-end gap-4">
    
        <div className="flex-1 min-w-[180px]">
          <Input 
            label="Name"
            type="text"
            placeholder="Search By"
          />
        </div>
        <div className="flex-1 min-w-[150px]">
          <Input 
            label="Date from"
            type="text"
            placeholder="From Date"
          />
        </div>
        <div className="flex-1 min-w-[150px]">
          <Input 
            label="Date to"
            type="text"
            placeholder="To Date"
          />
        </div>
        <div className="flex-1 min-w-[180px]">
          <Input 
            label="SendMessage"
            type="select"
            placeholder="Success"
            options={[
              { label: 'Success', value: 'success' },
              { label: 'Pending', value: 'pending' },
              { label: 'Failed', value: 'failed' }
            ]}
          />
        </div>
        <div className="pb-1">
          <Button variant='success'>
            <i className="ri-search-line text-xl"></i>
          </Button>
        </div>

      </div>
    </div>
  )
}

export default SendEmailListSearch;