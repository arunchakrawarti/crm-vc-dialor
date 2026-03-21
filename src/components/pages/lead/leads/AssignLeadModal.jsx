import OverlayModal from '@/components/common/OverlayModal';
import React from 'react';
import { Send } from 'lucide-react';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';

const AssignLeadModal = ({ isOpen, onClose }) => {
  return (
    <OverlayModal 
      isOpen={isOpen} 
      onClose={onClose} 
      modalClass='bg-white'
    >
      <div className="p-6">
        <form className="flex flex-col md:flex-row items-end gap-4">
          <div className="flex-1 w-full">
            <Input 
              label="Name" 
              type="select" 
              placeholder="-Select Users-"
              options={[
                { label: 'User 1', value: '1' },
                { label: 'User 2', value: '2' }
              ]}
              className="!h-[42px]"
            />
          </div>
          <div className="mb-[2px]"> 
            <Button 
              type="submit" 
              variant='success'
            >
              SUBMIT <Send size={18} fill="currentColor" />
            </Button>
          </div>

        </form>
      </div>
    </OverlayModal>
  )
}

export default AssignLeadModal;