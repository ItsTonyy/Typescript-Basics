interface computer {
  gpu: string,
  cpu: string,
  ram: string,
  quantityRam: number,
  windowsVersion: number
}

type ComputerGpu = Pick<computer, 'gpu' | 'cpu' | 'windowsVersion'>

const gpu: ComputerGpu = {
  gpu: 'Rtx 3080',
  cpu: 'intel i7',
  windowsVersion: 11
} 