import { Button } from 'antd';

const NotFound = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center gap-[20px] pt-[50px]'>
      <div>404</div>
      <div>Not Found</div>
      <Button type='primary' href='/'>
        Back to Home
      </Button>
    </div>
  );
};

export default NotFound;
