import Button from '../../standard/Button';
import { openModal } from '../../reducer/modalSlice';
import { useAppDispatch } from '../../hooks/useRedux';
import DropDown from '../../standard/DropDown';

const Launch = () => {
  const dispatch = useAppDispatch();

  return (
    <div className='Launch'>
      <h1 className='Launch__title'>Platform Launch</h1>
      <div className='Launch__buttons'>
        <Button onClick={() => dispatch(openModal({ ModalType: 'AddNewTask' }))}> + Add New task </Button>
        <DropDown
          text={'Board'}
          onEdit={() => dispatch(openModal({ ModalType: 'EditBoard' }))}
          onDelete={() => dispatch(openModal({ ModalType: 'DeleteBoard' }))}
        />
      </div>
    </div>
  );
};

export default Launch;
